import "./Lightbar.css";

interface LightbarProps {
  className?: string;
}

export function Lightbar(props: LightbarProps) {
  return (
    <div className="absolute inset-0 w-full h-[680px] overflow-hidden pointer-events-none -mt-64">
      <div className="max-w-screen w-full h-[680px] relative pt-64">
        <div className={props.className}>
          <div className="lightbar">
            <div className="lightbar-visual" />
          </div>
        </div>
      </div>
    </div>
  );
}
