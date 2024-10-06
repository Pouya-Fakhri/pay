import { useEffect } from "react";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Forme() {
  const [cartNum, setCartNum] = useState("");
  const [cv2, setCv2] = useState("");
  const [year, setYear] = useState("");
  const [mount, setMount] = useState("");

  const cv2Ref = useRef(null);
  const cartNumberRef = useRef(null);
  const yearRef = useRef(null);
  const mountRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    cartNumberRef.current.focus();
  }, []);
  useEffect(() => {
    const cartLength = cartNum.length;
    if (cartLength == 16) {
      cv2Ref.current.focus();
    } else if (cartLength > 16) {
      toast.error("Your card number must be 16 digits");
    }
  }, [cartNum]);
  useEffect(() => {
    const cv2Length = cv2.length;
    if (cv2Length == 4) {
      yearRef.current.focus();
    } else if (cv2Length > 4) {
      toast.error("Your cv2 number must be 4 digits");
    }
  }, [cv2]);
  useEffect(() => {
    const yearLength = year.length;
    if (yearLength == 4) {
      mountRef.current.focus();
    } else if (yearLength > 4) {
      toast.error("Your year must be 4 digits");
    }
  }, [year]);
  useEffect(() => {
    const mountLength = mount.length;
    if (mountLength == 2) {
      submitRef.current.focus();
    } else if (mountLength > 2) {
      toast.error("Your mont must be 2 digits");
    }
  }, [mount]);

  return (
    <div className=" bg-[#387478] w-screen h-screen flex items-center justify-center " >
      <Toaster position="top-center" reverseOrder={true} />

      <form action="" className="bg-[#629584] w-7/12 h-2/3 flex flex-col p-5 rounded-3xl ">
        <label htmlFor="" className=" font">cart:</label>
        <input
          type="number"
          className="cartNum border rounded-3xl"
          onChange={(e) => {
            setCartNum(e.target.value);
          }}
          value={cartNum}
          ref={cartNumberRef}
          maxLength={16}
        />
        <label htmlFor="">cv2:</label>
        <input
          type="number"
          className="cvv2  border rounded-3xl"
          onChange={(e) => {
            setCv2(e.target.value);
          }}
          value={cv2}
          ref={cv2Ref}
          maxLength={4}
        />
        <label htmlFor="">year:</label>
        <input
          type="number"
          className="year  border rounded-3xl"
          onChange={(e) => {
            setYear(e.target.value);
          }}
          value={year}
          ref={yearRef}
          maxLength={4}
        />
        <label htmlFor="">mount:</label>
        <input
          type="number"
          className="mount  border rounded-3xl"
          onChange={(e) => {
            setMount(e.target.value);
          }}
          value={mount}
          ref={mountRef}
          maxLength={2}
        />
        <input type="submit" ref={submitRef} />
      </form>
    </div>
  );
}

export default Forme;
// x1111111111111111
