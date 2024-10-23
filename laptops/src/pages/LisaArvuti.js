import { useState } from 'react'

function LisaArvuti() {

  const [message, setMessage] = useState("Lisa arvuti");

  return (
    <div>
      <div>Sõnum: {message}</div>
      <label>Mark</label>
      <input type="text" /> <br />
      <label>Mudel</label>
      <input type="text" /><br />
      <label>Maksumus</label>
      <input type="number" /><br />
      {message === "Lisa arvuti" && <button onClick={() => setMessage("Lisatud!")}>Sisesta</button>}
       



    </div>
  )
}

export default LisaArvuti