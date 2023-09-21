import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./VirtualTour.css";
import {workFlows} from './tourSteps';


const VirtualTour = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [tourClosed, setTourClosed] = useState(false);
  const [tourPosition, setTourPosition] = useState({ top: 0, left: 0 });
  const tourRef = useRef(null);
  const navigate = useNavigate()
  
  const combinedWorkflow = [];

  let currentIndex = 0;
  
 
  for (const key in workFlows) {
    if (workFlows.hasOwnProperty(key)) {
      const objectsForKey = workFlows[key];
  
      objectsForKey.forEach((obj) => {
        combinedWorkflow[currentIndex] = obj;
        currentIndex++;
      });
    }
  }

  //  combinedWorkflow = customSteps || [];


// next button functionality
  // const nextStep = () => {
  //   console.log("currentStep", currentStep);
  //   if (currentStep < tourSteps.length - 1) {
  //     const step = tourSteps[currentStep];
  //     if (step.elementType === "link") {
  //       navigate(step.nextPage)
  //       setCurrentStep(currentStep + 1);
  //     } else  {
  //       navigate(step.nextElement);
  //       // setCurrentStep(currentStep + 1);
  //     }
  //   }
  // };
  const nextStep = () => {
    console.log("currentStep", currentStep);
  
    if (currentStep < combinedWorkflow.length - 1) {
      const step = combinedWorkflow[currentStep];
      if (step.elementType === "link" && step.nextPage && step.nextElement) {
        navigate(step.nextPage);
        setCurrentStep(currentStep + 1);
      } else if (step.nextElement) {
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
        const stepIndex = combinedWorkflow.findIndex(step => step.elementSelector === previousElement);
        if (stepIndex !== -1) {
          setCurrentStep(stepIndex);
          const elementToHighlight = document.querySelector(previousElement);
          if (elementToHighlight) {
            setHighlightedElement(elementToHighlight);
          }
        }
      }, 100); 
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

  const finishTour = () => {
    setTourClosed(true); 
    navigate("/home");   
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
      const step = combinedWorkflow[currentStep];
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
  }, [currentStep, highlightedElement]);

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
            {combinedWorkflow[currentStep].header}         
          </div>)}
          <span className="close-icon" onClick={closeTour}>x</span>
        <div className="tour-content">
          <p>{combinedWorkflow[currentStep].content}</p>
        </div>
        <div className="tour-navigation">
          <div className="tour-buttons">
            {combinedWorkflow[currentStep].hasBackButton && (
              <button
                className="tour-button"
                onClick={() =>
                  handleBackButton(
                    combinedWorkflow[currentStep].previousPage,
                    combinedWorkflow[currentStep].previousElement )}>
                {combinedWorkflow[currentStep].backButtonLabel || "Back"}
              </button>)}
            {currentStep < combinedWorkflow.length - 1 && (
              <button className="tour-button" onClick={nextStep}>
                {combinedWorkflow[currentStep].hasNextButton
                  ? combinedWorkflow[currentStep].nextButtonLabel
                  : "Next"}
              </button>)}
              {currentStep === combinedWorkflow.length - 1 && (
              <button className="tour-button" onClick={finishTour}>
                Finished
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;