import { useEffect } from "react";
import { useRef, useState } from "react";

function Forme() {
  const [cartNum, setCartNum] = useState('');
  const cartNumberRef = useRef(null);
  const splitCartNum = cartNum.split('',16)
  console.log(splitCartNum);
    useEffect(()=>{
        cartNumberRef.current.focus();
    },[])
  
  
  return (
    <div>
      <form action="">
        <label htmlFor="">fhls;ghdlsjdlk</label>
        <input
          type="number"
          className="cartNum border rounded-3xl"
          onChange={(e) => {
            setCartNum(e.target.value);
          }}
          value={cartNum}
          ref={cartNumberRef}
        />
        <input type="number" className="cvv2  border rounded-3xl" />
        <input type="number" className="year  border rounded-3xl" />
        <input type="number" className="mount  border rounded-3xl" />
      </form>
    </div>
  );
}

export default Forme;
