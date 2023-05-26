
import { text } from "./text";

interface PopupDisclaimerProps {
  onClose: () => void;
}

export const PopupDisclaimer: React.FC<PopupDisclaimerProps> = ({ onClose }) => {
  const paragraphs = text.split('<p>').filter(Boolean);
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-fade bg-opacity-80 flex justify-center items-center" onClick={onClose}>
      <div className="relative flex z-20 bg-white w-[300px] md:w-[620px] md:h-[400px] xl:h-[580px] p-5 rounded-[20px] justify-center items-start" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col text-left">
          <h3 className="text-green font-bold mb-2">Disclaimer</h3>
          <div className="max-h-[430px] md:max-h-[320px] xl:max-h-[500px] overflow-auto">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-grey mb-5" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
        <button onClick={onClose} className="absolute right-4 top-3 text-green text-opacity-100">
          &#10006;
        </button>
      </div>
    </div>
  );
};
