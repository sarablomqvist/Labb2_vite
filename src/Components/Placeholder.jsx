import './Placeholder.css'

function Placeholder() {


    return (
        <>
        <button onClick='addSerie'>lägg till</button>
                <div className="placeholder">

                    <input
                        ref={myInput}
                        name='addText'
                        id='addText'
                        placeholder="Vad letar du efter?"
                        className="placeholder"
                    ></input>
                    <div className='Curtain'>
                        <div className='text'>Beverly Hills</div>
                        <div className='text'>Greys Anatomy</div>
                        <div className='text'>Outlander</div>
                    </div>
                </div>
        </>
    )
}

export default Placeholder
