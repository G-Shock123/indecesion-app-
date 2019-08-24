import React from 'react'


const Action = (props) => (
        <div>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What is the perfect meeting time?
                </button>
        </div>
    )


export default Action