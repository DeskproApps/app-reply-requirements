"use strict";

// rules in rulesets are represented in a disjunctive normal form, an OR of ANDs
export const denyReply = {
  rules: [
    // a list of rules group indicates an AND group
    [
      (ticket, tabData) => tabData.hasTimeLog,
      (ticket, tabData) => ticket.charges.length === 0
    ]
  ]
};
