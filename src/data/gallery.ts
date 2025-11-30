export type Item = {
  id: string;
  type: "photo" | "video";
  title: string;
  src: string;
  caption: string;
};

export const GALLERY: Item[] = [
  {
    id: "g1",
    type: "photo",
    title: "Workshop Sekolah Dasar",
    src: "/media/perkenalan.jpeg",
    caption: "Sesi edukasi untuk siswa.",
  },
  {
    id: "g2",
    type: "video",
    title: "Diskusi Orangtua",
    src: "/media/pretest1.mp4",
    caption: "Dialog dengan orangtua di desa.",
  },
  {
    id: "g3",
    type: "video",
    title: "Testimoni",
    src: "/media/materi.mp4",
    caption: "Video testimoni peserta.",
  },
  {
    id: "g4",
    type: "video",
    title: "Simulasi",
    src: "/media/game.mp4",
    caption: "Roleplay dan simulasi.",
  },
  {
    id: "g5",
    type: "photo",
    title: "Poster Edukasi",
    src: "/media/posttest.jpeg",
    caption: "Poster kampanye.",
  },
  {
    id: "g6",
    type: "photo",
    title: "Liputan Media",
    src: "/media/diskusi.jpeg",
    caption: "Cuplikan liputan video.",
  },
];

export default [...GALLERY];
