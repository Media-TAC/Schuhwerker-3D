import { X } from 'lucide-react';

interface ExitConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ExitConfirmDialog({ onConfirm, onCancel }: ExitConfirmDialogProps) {
  return (
    <div
      className="absolute inset-0 z-[60] flex items-center justify-center bg-black/55 px-5 animate-fade-up"
      role="alertdialog"
      aria-label="Abbruch bestätigen"
    >
      <div className="w-full max-w-[280px] bg-base-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-5 py-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[15px] font-semibold tracking-tight text-carbon">Wirklich abbrechen?</h3>
          <button
            onClick={onCancel}
            aria-label="Schließen"
            className="no-tap-highlight -mt-1 -mr-1 w-6 h-6 rounded-full flex items-center justify-center text-technical hover:text-carbon transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[12px] text-technical leading-relaxed">
          Du kehrst zur Startseite zurück und der aktuelle Ablauf wird beendet.
        </p>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            onClick={onCancel}
            className="no-tap-highlight rounded-full border border-hairline px-3.5 py-2 text-[12px] font-semibold text-carbon transition-all active:scale-95"
          >
            Nein, bleiben
          </button>
          <button
            onClick={onConfirm}
            className="no-tap-highlight rounded-full bg-signal px-3.5 py-2 text-[12px] font-semibold text-base-white transition-all active:scale-95"
          >
            Ja, abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}
