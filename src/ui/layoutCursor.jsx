import Drag from "../ui/components/CursorFollow"; // Importa o cursor

export default function LayoutCursor({ children }) {
  return (
    <>
      <Drag />
      {children}
    </>
  );
}