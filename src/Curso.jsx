import React from 'react';

const Curso = () => (
    <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://www.xda-developers.com/files/2018/03/youtube-dark.png" alt="poster del curso"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-long-haired-female-teacher-teacher-lecture-female-teacher-holding-a-book-png-image_344619.jpg" alt="female teacher"/>
          </div>
        </div>
        <span className="small">Alexys Lozada</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team/">$ 20USD</a>
    </div>
  </div>
</article>
)

export default Curso;