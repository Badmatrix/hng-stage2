/* eslint-disable react/prop-types */

export default function InputForm({ children, type }) {
  return (
    <div className="w-full">
      {type === "checkbox" ? (
        <label className="tracking-wide lowercase flex font-light">
          <input type="checkbox" className=" accent-wine-200 mx-3  h-6 w-6" />{children}
        </label>
      ) : (
        <label className=" capitalize lg:text-xl font-bold space-y-2">
          {children} <span className="text-wine-400">*</span>
          <input
            type={type}
            className="rounded-lg outline outline-1 outline-wine-900 block bg-newgray-700  w-full py-1"
          />
        </label>
          )}
          
    </div>
  );
}
