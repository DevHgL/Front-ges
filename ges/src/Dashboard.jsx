import React from 'react';
import './dashboard.css'; // Assuming the Texte.css file exists in the same directory as the component.


const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Meu Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Página 1</a></li>
          <li><a href="#">Página 2</a></li>
          <li><a href="#">Página 3</a></li>
        </ul>
      </nav>
      <main>
        <section>
          <div className="widget">
            <div className="widget-header">
              <h2>Widget 1</h2>
            </div>
            <div className="widget-content">
              <p>Conteúdo do Widget 1</p>
            </div>
          </div>
        </section>
        <section>
          <div className="widget">
            <div className="widget-header">
              <h2>Widget 2</h2>
            </div>
            <div className="widget-content">
              <p>Conteúdo do Widget 2</p>
            </div>
          </div>
        </section>
        <section>
          <div className="widget">
            <div className="widget-header">
              <h2>Widget 3</h2>
            </div>
            <div className="widget-content">
              <p>Conteúdo do Widget 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
