import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Accordion = ({title, children}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full my-1 px-4 py-2 text-sm font-medium text-left transition duration-200 ease-in text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-500 transition-all duration-200 ease-in`}
            />
          </Disclosure.Button>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Accordion