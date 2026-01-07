import { Heading } from '@/components/Typography';
import { useUiState } from '@/state';
import { createFileRoute } from '@tanstack/react-router';
import { cx } from 'class-variance-authority';
import { items } from '../data/items';

const REMOVABLE_QTY = 9999;
export const Route = createFileRoute('/')({ component: App });

function App() {
  const craftList = useUiState((state) => state.craftList);
  const addToCraftList = useUiState((state) => state.addToCraftList);
  const removeFromCraftList = useUiState((state) => state.removeFromCraftList);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#0a0a0a] font-secondary text-zinc-400">
      <header className="border-b border-zinc-800 p-4">
        <h2 className="font-primary text-xs font-black tracking-[0.3em] text-zinc-500 uppercase">
          ARC Raiders / Crafting Planner
        </h2>
      </header>
      <div className="flex flex-col overflow-hidden md:flex-row">
        <div
          data-slot="item-database"
          className="flex flex-col border-zinc-800 bg-zinc-900/20 md:w-1/4 md:border-r"
        >
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
          <ul className="flex flex-col gap-2 overflow-y-scroll p-4">
            {Object.keys(items).map((itemKey) => {
              const item = items[itemKey];
              const rarityClassMap = {
                Common: 'gradient-common',
                Uncommon: 'gradient-uncommon',
                Rare: 'gradient-rare',
                Epic: 'gradient-epic',
                Legendary: 'gradient-legendary',
              } as const;

              return (
                <button
                  className={cx([
                    rarityClassMap[item.rarity],
                    'cursor-pointer p-3 select-none',
                  ])}
                >
                  <img src={item.imageFilename} />
                  {item.name}
                </button>
              );
            })}
          </ul>
        </div>
        <div
          data-slot="shopping-list"
          className="flex flex-col bg-black md:w-1/2"
        >
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
        <div
          data-slot="stash"
          className="flex flex-col border-zinc-800 bg-zinc-900/20 md:w-1/4 md:border-l"
        >
          <Heading as="h1" intent="primary">
            My stash
          </Heading>
        </div>
      </div>
    </div>
  );
}
