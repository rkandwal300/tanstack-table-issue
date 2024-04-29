import { LucideFlame, LucideTrash2 } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

type DEFAULT_CARDS = {
  title: string;
  id: string;
  column: string;
};

export function NotionKanban() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
}

export function Board() {
  const [cards, setCards] = React.useState<DEFAULT_CARDS[]>(DEFAULT_CARDS);
  return (
    <div className="flex h-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
}

const Column = ({
  title,
  headingColor,
  column,
  cards,
  setCards,
}: {
  title: string;
  headingColor: string;
  column: string;
  cards: DEFAULT_CARDS[];
  setCards: React.Dispatch<React.SetStateAction<DEFAULT_CARDS[]>>;
}) => {
  const [active, setActive] = React.useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: DEFAULT_CARDS
  ) => {
    e.dataTransfer.setData("card", card.id);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
    highlightIndicator(e);
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    // clearHighlights(indicators);
    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  function clearHighlights(els?: Element[]) {
    const indicators = els || getIndicators();

    indicators.forEach((el) => {
      el.style.opacity = "0";
    });
  }

  function getNearestIndicator(
    e: React.DragEvent<HTMLDivElement>,
    indicators: Element[]
  ): {
    offset: number;
    element: Element;
  } {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  }

  const handleDragLeave = () => {
    // e.preventDefault();
    setActive(false);
    clearHighlights();
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("card");

    console.log("CARDID", cardId);

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };
  const filterCards = cards.filter(
    (card: DEFAULT_CARDS) => card.column === column
  );
  return (
    <div className="w-56 flex flex-1 flex-col   shrink-0">
      <div className="mb-3 flex gap-1 items-center">
        <h3 className={`font-medium whitespace-nowrap ${headingColor}`}>
          {title}
        </h3>
        <span className="rounded text-sm text-neutral-400">
          {`(${filterCards.length})`}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`flex flex-1 flex-col transition-colors gap-1 ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filterCards.map((card: DEFAULT_CARDS) => (
          <Card key={card.id} handleDragStart={handleDragStart} {...card} />
        ))}

        <DropIndicator beforeId={"-1"} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};
const Card = ({
  handleDragStart,
  title,
  id,
  column,
}: {
  title: string;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    card: DEFAULT_CARDS
  ) => void;
  id: string;
  column: string;
}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable={true}
        onDragStart={(e) =>
          handleDragStart(e as unknown as React.DragEvent<HTMLDivElement>, {
            title,
            id,
            column,
          })
        }
        className=" cursor-grab w-56 rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({
  beforeId,
  column,
}: {
  beforeId: string;
  column: string;
}) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: React.Dispatch<React.SetStateAction<DEFAULT_CARDS[]>>;
}) => {
  const [active, setActive] = React.useState(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };
  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("card");
    if (cardId) {
      setCards((prev) => prev.filter((card) => card.id !== cardId));
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-800 bg-neutral-800/20 text-neutral-500 "
      }
      `}
    >
      {active ? <LucideFlame size={18} /> : <LucideTrash2 size={16} />}
    </div>
  );
};

const AddCard = ({
  column,
  setCards,
}: {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<DEFAULT_CARDS[]>>;
}) => {
  const [active, setActive] = React.useState(false);
  const [input, setInput] = React.useState("");
  return (
    <div
      className={`${
        active ? "bg-neutral-800/50" : "bg-neutral-800/0"
      } p-2 rounded cursor-pointer`}
      onClick={() => setActive(true)}
    >
      {active ? (
        <motion.form
          className="flex flex-col  gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setCards([
              ...DEFAULT_CARDS,
              { title: input, id: `${DEFAULT_CARDS.length + 1}`, column },
            ]);
            setActive(false);
            setInput("");
          }}
        >
          <textarea
            autoFocus
            placeholder="Add a card..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-sm p-3 rounded border border-violet-400 bg-violet-400/20 text-neutral-50
            placeholder-violet-300 focus:outline-0"
          />
          <div className="flex gap-1.5 justify-end">
            <motion.p
              className=" px-3 py-1.5  text-xs text-neutral-400 transition-colors  hover:text-neutral-50"
              onClick={() => {
                setActive(false);
                setInput("");
              }}
            >
              Close
            </motion.p>
            <button
              type="submit"
              className="font-semibold rounded bg-neutral-50 px-3 py-1.5 text-xs  text-neutral-950 transition-colors hover:text-neutral-50 hover:bg-neutral-700"
            >
              Add +
            </button>
          </div>
        </motion.form>
      ) : (
        <p className="text-start px-3 text-neutral-400 text-sm"> Add card +</p>
      )}
    </div>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];
