import { Heading } from '@/components/Typography';
import { useUiState } from '@/state';
import { createFileRoute } from '@tanstack/react-router';
import items from '../data/items.json';

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
        <div className="grid grid-cols-4">
          <ul>
            {Object.keys(items).map((item) => {
              const itemObj = items[item];
              console.log(itemObj.rarity);
              const rarityClassMap = {
                Common: 'gradient-common',
                Uncommon: 'gradient-uncommon',
                Rare: 'gradient-rare',
                Epic: 'gradient-epic',
                Legendary: 'gradient-legendary',
              };
              return (
                <li className={rarityClassMap[itemObj.rarity]}>
                  <img src={itemObj.imageFilename} />
                  {item}
                </li>
              );
            })}
          </ul>
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
