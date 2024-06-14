'use client';
import React from 'react';
import { Libraries, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { cn } from '@/lib/utils';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';

import { FaSearch } from 'react-icons/fa';
import { Input } from '../ui/input';
import { FiMapPin } from 'react-icons/fi';
import { Checkbox } from '../ui/checkbox';

type GoogleMapAutocompleteProps = {
  onSelectPlace: (place: { lat: number; lng: number }) => void;
};
type Place = {
  name: string;
  place_id: string;
  latitute: number;
  longitude: number;
};
type PageProps = {
  handleSelectedCities: (cities: any) => void;
};

// const libraries: Libraries = ['places'];
export default function GoogleMapAutocomplete({
  handleSelectedCities,
}: PageProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
    libraries: ['places'],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'in' },
    },
    debounce: 300,
    // cache: 24 * 60 * 60,
    // cacheKey: "region-restricted",
  });

  const handleSelect = async (address: Place) => {
    setValue(address.name, false);

    clearSuggestions();
    const CurrentName = address.name;
    const results = await getGeocode({ address: CurrentName });
    const { lat, lng } = await getLatLng(results[0]);

    handleSelectedCities({ ...address, latitute: lat, longitude: lng });
  };
  console.log('status : ', status);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Command>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        disabled={!ready}
        placeholder="Search an address..."
        className="w-full border text-sm font-medium"
      />
      <CommandGroup className="gap-1">
        {status === 'OK' &&
          // data.map((suggestion: Suggestion, index) => {
          data.map((suggestion: any, index) => {
            return (
              <CommandItem
                key={suggestion.place_id}
                value={suggestion.description}
                onSelect={(currentValue: string) => {
                  console.log(' suggestion : ', suggestion);
                  handleSelect({
                    name: currentValue,
                    place_id: suggestion.place_id,
                    longitude: 0,
                    latitute: 0,
                  });
                  setValue('');
                }}
                className="my-2 flex cursor-pointer items-center gap-2 text-sm font-normal"
              >
                <Checkbox />
                {suggestion?.description}
              </CommandItem>
            );
          })}
      </CommandGroup>
    </Command>
  );
}
