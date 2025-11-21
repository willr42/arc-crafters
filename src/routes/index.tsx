import { Heading } from '@/components/Typography';
import { useUiState } from '@/state';
import { createFileRoute } from '@tanstack/react-router';

const REMOVABLE_QTY = 9999;
export const Route = createFileRoute('/')({ component: App });

function App() {
  const craftList = useUiState((state) => state.craftList);
  const addToCraftList = useUiState((state) => state.addToCraftList);
  const removeFromCraftList = useUiState((state) => state.removeFromCraftList);

  return (
    <div className="grid min-h-screen grid-cols-3 font-secondary text-white">
      <div data-slot="item-database" className="bg-red-700 p-2">
        <Heading as="h1" intent="primary">
          Items
        </Heading>
        {/* <label htmlFor="search" className="flex flex-col gap-2">
          Search
          <input
            id="search"
            name="search"
            type="search"
            className="max-w-[50ex] rounded-sm border border-black bg-white px-1 py-2 shadow-xs"
            placeholder={'Advanced Mechanical Components Blueprint'}
          />
        </label> */}
        <button
          onClick={() => {
            addToCraftList('anvil-iv');
          }}
        >
          Add to store
        </button>
        <div className="grid grid-cols-4">
          <div className="gradient-legendary">
            <img
              src="https://cdn.arctracker.io/items/anvil.png"
              className="p-2"
            />
          </div>
        </div>
      </div>
      <div data-slot="shopping-list" className="bg-blue-700 p-2">
        <Heading as="h1" intent="primary">
          Wishlist
        </Heading>
        {Object.entries(craftList).map(([id, qty]) => {
          return (
            <div
              onClick={() => {
                removeFromCraftList(id, REMOVABLE_QTY);
              }}
              key={id}
            >
              {id} - {qty}
            </div>
          );
        })}
      </div>
      <div data-slot="stash" className="bg-green-700 p-2">
        <Heading as="h1" intent="primary">
          My stash
        </Heading>
      </div>
    </div>
  );
}
