import { books } from '../data/resume';
import { BookOpen } from 'lucide-react';
import SubHeading from './SubHeading';

function BookCard({ book, status }) {
  const isReading = status === 'reading';

  return (
    <div className={`group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isReading
        ? 'border-sky-500/30 hover:border-sky-400/50 hover:shadow-sky-500/10'
        : 'border-slate-800 hover:border-slate-600 hover:shadow-slate-900/50'
    }`}>
      {/* Reading badge */}
      {isReading && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-sm border border-sky-500/40 text-sky-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Reading
        </div>
      )}

      {/* Book cover */}
      <div className="relative bg-slate-900 overflow-hidden" style={{ aspectRatio: '2/3' }}>
        {book.cover ? (
          <>
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image fails */}
            <div className="absolute inset-0 hidden flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-800 to-slate-900 text-center">
              <BookOpen size={32} className="text-slate-600 mb-3" />
              <p className="text-white font-bold text-sm leading-tight">{book.title}</p>
              <p className="text-slate-500 text-xs mt-1">{book.author}</p>
            </div>
          </>
        ) : (
          /* No cover available — styled fallback */
          <div className={`w-full h-full flex flex-col items-center justify-center p-5 text-center bg-gradient-to-br ${
            isReading
              ? 'from-sky-900/60 to-slate-900'
              : 'from-indigo-900/50 to-slate-900'
          }`}>
            <BookOpen size={28} className={isReading ? 'text-sky-500 mb-3' : 'text-indigo-400 mb-3'} />
            <p className="text-white font-bold text-sm leading-snug">{book.title}</p>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">{book.author}</p>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <p className="text-slate-200 text-xs leading-relaxed">{book.note}</p>
        </div>
      </div>

      {/* Title + author below cover */}
      <div className={`p-2.5 ${isReading ? 'bg-sky-950/20' : 'bg-slate-900/60'}`}>
        <p className="text-white font-semibold text-xs sm:text-sm leading-snug line-clamp-2">{book.title}</p>
        <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 line-clamp-1">{book.author}</p>
      </div>
    </div>
  );
}

export default function Library() {
  return (
    <div id="library" className="scroll-mt-24">
      <SubHeading eyebrow="Reading List" title="My Library" />
      <p className="text-slate-500 text-sm -mt-5 mb-8">
        Books that have shaped how I think about engineering, leadership, and culture.
      </p>

      {/* Currently Reading */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <h3 className="text-white font-bold text-lg">Currently Reading</h3>
          </div>
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-sm font-mono">{books.reading.length} books</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {books.reading.map((book) => (
            <BookCard key={book.title} book={book} status="reading" />
          ))}
        </div>
      </div>

      {/* Completed */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">✓</span>
            <h3 className="text-white font-bold text-lg">Completed</h3>
          </div>
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-sm font-mono">{books.completed.length} books</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {books.completed.map((book) => (
            <BookCard key={book.title} book={book} status="completed" />
          ))}
        </div>
      </div>
    </div>
  );
}
