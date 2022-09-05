

const EntriesCount = ({ name, entries }) => {
   return(
      <>
         <div style={{display: "flex", justifyContent: "center"}}>
            <h2>{`${name} your current entry count is ${entries}`}</h2>
         </div>
      </>
   )
}

export default EntriesCount;