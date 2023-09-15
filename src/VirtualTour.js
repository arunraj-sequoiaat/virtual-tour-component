import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./VirtualTour.css";
// import { useStepStore } from './store/store';

const VirtualTour = ({ customSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  // const currentStep = useStepStore(state => state.currentStep)
  // const setCurrentStep = useStepStore(state => state.setNextStep)
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [tourClosed, setTourClosed] = useState(false);
  const [tourPosition, setTourPosition] = useState({ top: 0, left: 0 });
  const tourRef = useRef(null);
  const navigate = useNavigate()

  const tourSteps = customSteps || [];

// next button functionality
  const nextStep = () => {
    console.log("currentStep", currentStep);
    if (currentStep < tourSteps.length - 1) {
      const step = tourSteps[currentStep];
      if (step.elementType === "link") {
        // window.location.href = step.nextPage;
        navigate(step.nextPage)
        setCurrentStep(currentStep + 1);
      } else {
        navigate(step.nextElement);
        setCurrentStep(currentStep + 1);
      }
    }
  };
//back button functionality
  const handleBackButton = (previousPage, previousElement) => {
    if (previousPage) {
      navigate(previousPage);
      setTimeout(() => {
        const stepIndex = tourSteps.findIndex(step => step.elementSelector === previousElement);
        if (stepIndex !== -1) {
          setCurrentStep(stepIndex);
          const elementToHighlight = document.querySelector(previousElement);
          if (elementToHighlight) {
            setHighlightedElement(elementToHighlight);
          }
        }
      }, 100); 
    // } else if (previousElement) {
    //   const stepIndex = tourSteps.findIndex(step => step.elementSelector === previousElement );
    //   if (stepIndex !== -1) {
    //     setCurrentStep(stepIndex);
    //     const elementToHighlight = document.querySelector(previousElement);
    //     if (elementToHighlight) {
    //       setHighlightedElement(elementToHighlight);
    //       setCurrentStep(currentStep - 1);
    //     }
    //   }
    } else {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }
  };
  

  const closeTour = () => {
    setTourClosed(true);

    if (highlightedElement) {
      highlightedElement.classList.remove("highlighted");
    }
  };
//positioning of the tour div according to the element position
  const calculateTourPosition = () => {
    if (highlightedElement) {
      const elementRect = highlightedElement.getBoundingClientRect();
      const tourDiv = tourRef.current;
      const tourRect = tourDiv.getBoundingClientRect();

      const distanceFromElement = 10;

      if (elementRect.left >= tourRect.width + distanceFromElement) {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.left - tourRect.width - distanceFromElement,
        });

        window.scrollTo({
          left: elementRect.left - tourRect.width - distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth",
        });
      } else if (
        elementRect.right + tourRect.width + distanceFromElement <=
        window.innerWidth
      ) {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.right + distanceFromElement,
        });

        window.scrollTo({
          left: elementRect.right + distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth",
        });
      } else if (
        elementRect.top >= tourRect.height + distanceFromElement
      ) {
        setTourPosition({
          top:
            elementRect.top -
            tourRect.height -
            distanceFromElement +
            window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
        });

        window.scrollTo({
          top:
            elementRect.top -
            tourRect.height -
            distanceFromElement +
            window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
          behavior: "smooth",
        });
      } else if (
        elementRect.bottom + tourRect.height + distanceFromElement <=
        window.innerHeight
      ) {
        setTourPosition({
          top: elementRect.bottom + distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
        });

        window.scrollTo({
          top: elementRect.bottom + distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
          behavior: "smooth",
        });
      } else {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.left - tourRect.width - distanceFromElement,
        });

        window.scrollTo({
          left: elementRect.left - tourRect.width - distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const showStep = () => {
      const step = tourSteps[currentStep];
      const element = document.querySelector(step.elementSelector);

      if (element) {
        calculateTourPosition();

        element.classList.add("highlighted");
        setHighlightedElement(element);
      }
    };

    showStep();

    return () => {
      if (highlightedElement) {
        highlightedElement.classList.remove("highlighted");
      }
    };
  }, [currentStep, tourSteps, highlightedElement]);

  if (tourClosed) {
    return null;
  }

  return (
    <div>
      {!tourClosed && <div className="blurred-overlay"></div>}
      <div
        className={`virtual-tour ${tourClosed ? "closed" : ""}`}
        style={{ top: tourPosition.top, left: tourPosition.left }}
        ref={tourRef}>
        {highlightedElement && (
          <div className="highlighted-element-info">
            {highlightedElement.id}
            <span className="close-icon" onClick={closeTour}>x</span>
          </div>)}
        <div className="tour-content">
          <p>{tourSteps[currentStep].content}</p>
        </div>
        <div className="tour-navigation">
          <div className="tour-buttons">
            {tourSteps[currentStep].hasBackButton && (
              <button
                className="tour-button"
                onClick={() =>
                  handleBackButton(
                    tourSteps[currentStep].previousPage,
                    tourSteps[currentStep].previousElement )}>
                {tourSteps[currentStep].backButtonLabel || "Back"}
              </button>)}
            {currentStep < tourSteps.length - 1 && (
              <button className="tour-button" onClick={nextStep}>
                {tourSteps[currentStep].hasNextButton
                  ? tourSteps[currentStep].nextButtonLabel
                  : "Next"}
              </button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;









