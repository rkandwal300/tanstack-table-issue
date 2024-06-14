import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import './TableContent.css';

export default function SingleBlogsContentTitle({ data }: { data: string }) {
  return (
    <Card className="hidden h-fit w-72 md:block ">
      {/* <Card className="w-72 max-h-[calc(100vh-30vh)]  hidden md:block "> */}
      <CardHeader className="text-sm font-bold ">
        {' '}
        TABLE OF CONTENTS{' '}
      </CardHeader>
      {data && (
        <CardContent
          className="table-of-contents overflow-scroll"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      )}
    </Card>
  );
}

// prose

/* <ul >
  <li>
    <a  href=\"#procurement-manager-responsibilities.-\">Procurement Manager Responsibilities. </a>
    </li>
    <li>
    <a  href=\"#-top-5-skills-every-procurement-manager-needs\"> Top 5 Skills Every Procurement Manager Needs</a>
    </li>
        <ul style='text-indent:20px'><li><a  href=\"#-1.-analytical-acumen\"> 1. Analytical Acumen</a></li><li><a  href=\"#2.-negotiation.\">2. Negotiation.</a></li><li><a  href=\"#-3.-effective-communication\"> 3. Effective Communication</a></li><li><a  href=\"#-4.-expertise-in-cost-management\"> 4. Expertise in Cost Management</a></li><li><a  href=\"#-5.-technological-proficiency\"> 5. Technological Proficiency</a>
  </li>
  <li>
     <a  href=\"#-common-challenges-for-procurement-managers\"> Common Challenges for Procurement Managers</a></li><li><a  href=\"#summary\">Summary</a>
  </li>
</ul> */
