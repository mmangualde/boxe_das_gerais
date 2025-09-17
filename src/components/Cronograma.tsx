// Em components/Cronograma.tsx
export default function Cronograma() {
    return(
        <section id="cronograma" className="page-section gray-bg">
            <h2>Cronograma Semanal</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>18:00 - 19:00</td>
                        <td>Iniciante</td>
                        <td>Avançado</td>
                        <td>Iniciante</td>
                        <td>Avançado</td>
                        <td>Sparring</td>
                    </tr>
                    <tr>
                        <td>19:00 - 20:00</td>
                        <td>Avançado</td>
                        <td>Iniciante</td>
                        <td>Avançado</td>
                        <td>Iniciante</td>
                        <td>Livre</td>
                    </tr>
                    {/* Adicione mais linhas conforme necessário */}
                </tbody>
            </table>
        </section>
    );
}