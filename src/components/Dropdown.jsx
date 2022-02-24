import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SearchIcon } from '@heroicons/react/solid'

const Dropdown = ({data, selected, query, setSelected, setQuery}) => {

  const filtered =
    query === ''
      ? data
      : data.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-full bg-white dark:bg-gray-700 rounded-md">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full items-center flex text-left bg-white dark:bg-gray-700 rounded-md cursor-default border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white dark:focus-visible:ring-gray-700 focus-visible:ring-offset-emerald-300 focus-visible:ring-offset-2 overflow-hidden">
            <SearchIcon className='w-5 h-5 absolute left-0 ml-3' />
            <Combobox.Input
              className="w-full bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 border-none focus:ring-0 py-3 pr-3 pl-10 leading-5 text-gray-900 dark:text-gray-100"
              placeholder="School Name"
              displayValue={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filtered.length === 0 && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filtered.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-gray-100 bg-emerald-500' : 'text-gray-900 dark:text-gray-100'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-gray-100' : 'text-emerald-500'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
export default Dropdown