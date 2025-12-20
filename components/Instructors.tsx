
import React from 'react';
import { INSTRUCTORS } from '../constants';

export const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-breeze-500 font-bold tracking-widest text-sm uppercase">Instructors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-700 mt-2">インストラクター</h2>
        </div>

        <div className="flex justify-center">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="group text-center max-w-md">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-breeze-200 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-stone-700 mb-1">{instructor.name}</h3>
              <p className="text-breeze-500 text-sm font-medium mb-3">{instructor.role}</p>
              
              {instructor.qualifications && (
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {instructor.qualifications.map((qual, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200"
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-stone-500 text-sm leading-relaxed">
                {instructor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
