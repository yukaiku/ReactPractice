import React from 'react'

function infoBox(info) {
    title = info.title;
    description = info.description;

    return (
        <section className="col-lg3">
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </section>
    )
}

export default infoBox
