import React from "react";

export const CourseReviewCard = (props) => {
    return (
        <>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseOne" 
            aria-expanded="true" 
            aria-controls="collapseOne">
            {props.moduleName}
            </button>
            </h2>
        <div id="collapseOne" 
        class="accordion-collapse collapse show" 
        aria-labelledby="headingOne" 
        data-bs-parent="#accordionExample">
        <div class="accordion-body">{props.content}</div>
        </div>
        </div>
        </>
    );
}