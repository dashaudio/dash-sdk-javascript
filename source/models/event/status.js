/**
 * Event Status wrapping schema.org's [ActionStatus](https://schema.org/ActionStatusType).
 * @type {Object}
 * @property {String} Active
 * @property {String} Completed
 * @property {String} Failed
 */
const EventStatus = {
  Active: 'https://schema.org/ActiveActionStatus',
  Completed: 'https://schema.org/CompletedActionStatus',
  Failed: 'https://schema.org/FailedActionStatus'
};

export default EventStatus;
