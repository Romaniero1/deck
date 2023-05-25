
import { text } from "./text";

interface PopupDisclaimerProps {
  onClose: () => void;
}

export const PopupDisclaimer: React.FC<PopupDisclaimerProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-fade bg-opacity-80 flex justify-center items-center" onClick={onClose}>
      <div className="relative flex z-20 bg-white w-[620px] h-[680px] p-5 rounded-[20px] justify-center items-start" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col text-left">
          <h2 className="text-green font-bold mb-2">Disclaimer</h2>
          <div className="max-h-[600px]  overflow-auto">
            <p className="text-grey mb-5">{text}</p>
          </div>
        </div>
        <button onClick={onClose} className="absolute right-4 top-3 text-green text-opacity-100">
          &#10006;
        </button>
      </div>
    </div>
  );
};
