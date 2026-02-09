
import React from 'react';
import { BOARD } from '../constants';

const Board: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Board of <span className="text-blue-600">Directors</span></h1>
          <p className="text-xl text-slate-600">
            Our board provides strategic oversight and ensures the highest standards of governance and integrity in all NorthDemy's operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {BOARD.map((member) => (
            <div key={member.id} className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-[32px] overflow-hidden shrink-0 shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{member.role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed italic">
                  "{member.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-24 p-12 bg-white rounded-[40px] border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Interested in Partnering with our Board?</h2>
           <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
             For strategic inquiries, governmental partnerships, or major institutional collaborations, please contact our directorate office directly.
           </p>
           <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all">
             Contact Board Secretariat
           </button>
        </div> */}
      </div>
    </div>
  );
};

export default Board;
