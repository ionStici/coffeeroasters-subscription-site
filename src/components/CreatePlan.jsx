import styles from './../styles/CreatePlan.module.scss';
import PropTypes from 'prop-types';

// // // // // // // // // // // // // // // // // // // //

const CreatePlan = function (props) {
    const data = props.data;

    const handleDropdown = function ({ target }) {
        const block = target.closest(`.${styles.accordion__block}`);
        const arrow = block.querySelector('svg');
        const boxes = block.querySelector(`.${styles.accordion__boxes}`);

        if (block.dataset.dropdown === 'close') {
            arrow.classList.add(styles.accordion__rotate);
            boxes.classList.add(styles.display_boxes);
            setTimeout(() => boxes.classList.add(styles.render_boxes), 1);

            block.dataset.dropdown = 'open';
            return;
        }

        if (block.dataset.dropdown === 'open') {
            arrow.classList.remove(styles.accordion__rotate);
            boxes.classList.remove(styles.render_boxes);
            setTimeout(() => boxes.classList.remove(styles.display_boxes), 250);

            block.dataset.dropdown = 'close';
            return;
        }
    };

    const setBoxActive = function ({ target }) {
        if (target.classList.contains(styles.accordion__box__active)) {
            target.classList.remove(styles.accordion__box__active);
            return;
        }

        const boxes = [
            ...target
                .closest(`.${styles.accordion__boxes}`)
                .querySelectorAll(`.${styles.accordion__box}`),
        ];

        boxes.forEach(box => {
            box.classList.remove(styles.accordion__box__active);
        });

        target.classList.add(styles.accordion__box__active);
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <nav className={styles.nav}></nav>

                {/*  */}
                <div className={styles.accordion}>
                    {data.map((q, i) => {
                        return (
                            // prettier-ignore
                            <div className={`${styles.accordion__block}`} key={i} data-dropdown={q.id === 1 ? 'open' : 'close'}>
                                {/* prettier-ignore */}
                                <button className={`${styles.accordion__btn}`} onClick={handleDropdown}>
                                    <h2>{q.question}</h2>
                                    {/* prettier-ignore */}
                                    <span>{<svg className={q.id === 1 ? styles.accordion__rotate : ''} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>}</span>
                                </button>
                                {/* prettier-ignore */}
                                <div className={`${styles.accordion__boxes} ${q.id === 1 ? styles.display_boxes : ''} ${q.id === 1 ? styles.render_boxes : ''}`}>
                                    {q.answers.map((a, i) => {
                                        return (
                                            // prettier-ignore
                                            <div className={`${styles.accordion__box}`} key={i} onClick={setBoxActive}>
                                                <h3>{a.title}</h3>
                                                <p>{a.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/*  */}

                <div className={styles.summary}></div>
            </div>
        </section>
    );
};

// // // // // // // // // // // // // // // // // // // //

CreatePlan.propTypes = {
    data: PropTypes.array,
};

export default CreatePlan;

// // // // // // // // // // // // // // // // // // // //
