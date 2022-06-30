import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";

export default function SimpleAccordion({ filters }) {
  return (
    <div style={{ width: "100%" }}>
      {filters.map((el, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              onClick={() => {
                console.log(el.filter);
              }}
            >
              {el.filter}
            </Typography>
          </AccordionSummary>
          {el.subFilter && (
            <AccordionDetails>
              <Typography component="div">
                <ul className="acc-list">
                  {el.subFilter.map((sub, idx) => (
                    <li key={idx} onClick={() => console.log(sub)}>
                      {sub}
                    </li>
                  ))}
                </ul>
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
}
