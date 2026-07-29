/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          1: '#111',
          2: '#333',
          3: '#555',
        },
      },
    },
  },
  safelist: [
    // Preserve critical utility classes used throughout the app
    'bg-white', 'bg-gray-50', 'bg-indigo-50', 'bg-purple-50', 'bg-green-50', 'bg-amber-50', 'bg-red-50', 'bg-blue-50',
    'text-gray-900', 'text-gray-700', 'text-gray-600', 'text-gray-500', 'text-gray-400',
    'text-blue-600', 'text-indigo-700', 'text-purple-700', 'text-green-800', 'text-green-700', 'text-amber-700', 'text-red-700',
    'border', 'border-gray-200', 'border-gray-300', 'border-gray-600', 'border-gray-700',
    'border-green-200', 'border-amber-200', 'border-red-200', 'border-indigo-200',
    'border-l-2', 'px-3', 'py-1', 'p-4', 'p-6', 'ml-2', 'space-y-2', 'space-y-4',
    'rounded', 'rounded-lg', 'rounded-md', 'hover:border-gray-300', 'cursor-pointer',
    'flex', 'flex-wrap', 'grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-6', 'gap-4',
    'min-h-screen', 'max-w-7xl', 'mx-auto', 'px-6', 'py-8', 'mb-8', 'mt-8',
    'dark:bg-gray-800', 'dark:text-white', 'dark:border-gray-700', 'dark:bg-gray-700/30',
    'font-medium', 'font-semibold', 'italic', 'font-mono', 'truncate'
  ],
  plugins: [],
}
