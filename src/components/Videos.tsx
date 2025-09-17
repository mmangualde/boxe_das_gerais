export default function Videos() {
    return(
        <section id="videos" className="page-section gray-bg">
            <h2>Nossos Vídeos</h2>
            <p className="section-subtitle">Confira alguns momentos dos nossos treinos e lutas!</p>
            <div className="videos-container">
                <div className="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/VIDEO_ID_1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <h3>Treino de Boxe</h3>
                </div>
                <div className="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/VIDEO_ID_1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <h3>Dicas de Sparring</h3>
                </div>
                 <div className="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/VIDEO_ID_1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <h3>Combinações Avançadas</h3>
                </div>
            </div>
        </section>
    );
}