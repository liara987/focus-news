function Home() {    
    const contentStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: '"Gill Sans", sans-serif',
        padding: '2rem'
    }
    return <div style={contentStyle}> 
        <h1>"My love, I could become Sonic and run around the world just to be next to you... though I might need a ring to keep my energy up!" 💍💙</h1>
        <img width={500} src="https://static.tildacdn.com/tild3533-6230-4835-b238-383765666664/sonic-sega.gif"></img>
    </div>
};

export default Home;