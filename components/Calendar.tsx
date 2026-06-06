"use client";

import Image from "next/image";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];
  const weekDays = ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className=" mt-20 ">
      <div className="mt-20 py-10  text-center">
        <h2 className="text-4xl font-bold text-vrayi tracking-[15%] mb-10">
          {monthNames[month - 1]} {year}
        </h2>

        <div className="  p-2 grid grid-cols-7 mb-2 text-lg font-medium text-vrayi">
          {weekDays.map((day) => (
            <div className=" font-bold " key={day}>
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 font-bold px-5 gap-2 text-xl">
          {calendarDays.map((day, idx) =>
            day ? (
              <div
                key={idx}
                className={`relative  py-2 rounded-full ${
                  day === highlightDay
                    ? " text-vrayi text-xl flex items-center justify-center"
                    : "text-vrayi "
                }`}
              >
                {day === highlightDay ? (
                  <div className=" text-white">
                    <span className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> {day}</span>
                    <Image
                      src="/sirt.png"
                      alt="Heart"
                      width={200}
                      height={200}
                      className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40  h-40 object-contain opacity-100"
                    />
                  </div>
                ) : (
                  day
                )}
              </div>
            ) : (
              <div key={idx}></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
