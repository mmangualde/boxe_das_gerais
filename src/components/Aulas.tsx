// Em components/Aulas.tsx
export default function Aulas() {
    return (
        <section id="aulas" className="page-section">
            <h2>Nossas Aulas</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Boxe Iniciante</h3>
                    <p>Aprenda os fundamentos do boxe, postura, movimentação e os golpes básicos.</p>
                </div>
                <div className="card">
                    <h3>Turma Avançada</h3>
                    <p>Para quem já tem experiência e quer aprimorar a técnica, estratégia e condicionamento.</p>
                </div>
                <div className="card">
                    <h3>Sparring Controlado</h3>
                    <p>Sessões de treino de combate supervisionadas para aplicar suas habilidades com segurança.</p>
                </div>
            </div>
        </section>
    );
}