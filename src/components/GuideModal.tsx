import React, { useState } from 'react';
import { X, BookOpen, Terminal, Edit3, Share2, UploadCloud, FileDown, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  if (!isOpen) return null;

  const tabs = [
    { id: 1, title: 'Cara Menjalankan', icon: Terminal },
    { id: 2, title: 'Edit Guru & Sekolah', icon: Edit3 },
    { id: 3, title: 'Edit Materi & Soal', icon: BookOpen },
    { id: 4, title: 'Simpan ke PDF', icon: FileDown },
    { id: 5, title: 'Upload Vercel & Share', icon: UploadCloud },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">PANDUAN LENGKAP PENGGUNAAN & KUSTOMISASI</h3>
              <p className="text-xs text-slate-400">Media Presentasi Matematika SMPN 1 Wanaraya (Suwarto, S.Pd.)</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-4 pb-2 border-b border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto py-4 text-xs text-slate-300 leading-relaxed space-y-3">
          {activeTab === 1 && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Cara Menjalankan Presentasi
              </h4>
              <p>
                Aplikasi ini dibangun menggunakan <strong>React 19 + TypeScript + Tailwind CSS</strong> dengan Vite. Presentasi dapat dijalankan secara online maupun offline tanpa memerlukan server database backend.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono space-y-2">
                <p className="text-slate-400"># 1. Masuk ke direktori proyek</p>
                <p className="text-emerald-400">cd project-folder</p>
                <p className="text-slate-400"># 2. Instal dependensi (jika baru diunduh)</p>
                <p className="text-emerald-400">npm install</p>
                <p className="text-slate-400"># 3. Jalankan server lokal</p>
                <p className="text-emerald-400">npm run dev</p>
                <p className="text-slate-400"># Buka peramban di: http://localhost:3000</p>
              </div>
              <p>
                Navigasi keyboard: Gunakan tombol <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-indigo-300">←</kbd> dan <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-indigo-300">→</kbd> atau <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-indigo-300">Space</kbd> untuk berpindah slide, dan <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-indigo-300">F</kbd> untuk Layar Penuh.
              </p>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-indigo-400" />
                Cara Mengganti Nama Guru & Sekolah
              </h4>
              <p>
                Data identitas sekolah, guru, kelas, dan tahun tersimpan rapi dalam satu file konfigurasi terpusat:
              </p>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                <span className="text-indigo-300 font-bold block mb-1">File: /src/data/slidesData.ts</span>
                <pre className="text-slate-300 overflow-x-auto">
{`export const APP_INFO = {
  title: 'BILANGAN BERPANGKAT & BENTUK AKAR',
  subtitle: 'Memahami Pola, Sifat, dan Penerapannya',
  target: 'Siswa SMP Kelas 8 Fase D',
  school: 'SMPN 1 Wanaraya',
  teacher: 'Suwarto, S.Pd.',
  year: '2026',
  totalSlides: 20,
};`}
                </pre>
              </div>
              <p>
                Cukup ubah nilai properti di atas, maka seluruh tampilan Cover, Catatan Guru, dan footer otomatis terupdate di semua 20 slide!
              </p>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                Cara Mengedit Materi & Soal Kuis
              </h4>
              <p>
                Soal kuis interaktif Slide 11 dan Slide 19 tersimpan dalam bentuk array JavaScript terstruktur pada file:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono">
                <p className="text-emerald-400 font-bold">/src/data/slidesData.ts</p>
                <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
                  <li><code className="text-indigo-300">QUIZ_SLIDE_11</code>: 5 Soal Pilihan Ganda Eksponen</li>
                  <li><code className="text-indigo-300">HOTS_MCQ_QUESTIONS</code>: 5 Soal Pilihan Ganda HOTS</li>
                  <li><code className="text-indigo-300">HOTS_TF_QUESTIONS</code>: 3 Soal Benar/Salah</li>
                  <li><code className="text-indigo-300">HOTS_REASONING_QUESTIONS</code>: 2 Soal Analisis Penalaran</li>
                </ul>
              </div>
              <p>
                Setiap soal memiliki properti <code className="text-amber-300">question</code>, opsi pilihan (<code className="text-amber-300">isCorrect: true/false</code>), petunjuk (<code className="text-amber-300">hint</code>), dan pembahasan (<code className="text-amber-300">explanation</code>).
              </p>
            </div>
          )}

          {activeTab === 4 && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FileDown className="w-4 h-4 text-emerald-400" />
                Cara Menyimpan Menjadi PDF (Print to PDF)
              </h4>
              <p>
                Aplikasi ini telah dilengkapi konfigurasi cetak CSS <code className="text-emerald-300">@media print</code> berstandar presentasi 16:9:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <li>Klik tombol <strong>"Cetak PDF"</strong> pada bilah navigasi bawah (atau tekan <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono">Ctrl + P</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono">Cmd + P</kbd>).</li>
                <li>Pada dialog cetak peramban (Chrome / Edge / Safari):</li>
                <li className="ml-4 text-amber-300">• Destination: <strong>Save as PDF</strong> (Simpan sebagai PDF)</li>
                <li className="ml-4 text-amber-300">• Layout: <strong>Landscape</strong></li>
                <li className="ml-4 text-amber-300">• Options: Centang <strong>"Background graphics"</strong> (Grafis latar belakang) agar warna dan gradasi tercetak utuh.</li>
                <li>Klik <strong>Save / Simpan</strong>. Seluruh 20 slide akan tersimpan sebagai dokumen PDF presentasi tanpa bilah navigasi!</li>
              </ol>
            </div>
          )}

          {activeTab === 5 && (
            <div className="space-y-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-cyan-400" />
                Cara Deploy ke Vercel & Membagikan Link ke Siswa
              </h4>
              <p>
                Untuk membuat presentasi ini dapat diakses siswa dari HP atau laptop masing-masing di rumah:
              </p>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="font-bold text-white">Langkah 1: Upload ke GitHub</p>
                <p className="font-mono text-slate-400">git init && git add . && git commit -m "Initial presentasi"</p>
                <p className="font-bold text-white mt-2">Langkah 2: Sambungkan ke Vercel</p>
                <p>Buka <span className="text-cyan-400 underline">vercel.com</span>, klik <strong>Add New Project</strong>, impor repositori GitHub Anda, dan klik <strong>Deploy</strong>.</p>
                <p className="font-bold text-white mt-2">Langkah 3: Bagikan Tautan ke Siswa</p>
                <p>Vercel akan memberikan link langsung seperti: <code className="text-emerald-400 font-mono">https://matematika-smpn1-wanaraya.vercel.app</code> yang siap dibagikan ke grup WhatsApp siswa atau Google Classroom.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">SMPN 1 Wanaraya • Suwarto, S.Pd. • 2026</span>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
