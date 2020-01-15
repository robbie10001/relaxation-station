import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class SimpleForm extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    const { score } = this.state;
    const { onEntryFormSubmit } = this.score;
    this.setState({ score: event.target.value })
  }
  
  render() {
    console.log(this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>How are you feeling today?</label>
          <div>
            <Field
              name="feelingtoday"
              component="input"
              type="number"
              placeholder="rating from 1 to 10"
            />
          </div>
        </div>
        <div>
          <label>How have you felt over the last week?</label>
          <div>
            <Field
              name="feelingoverthelastweek"
              component="input"
              type="number"
              placeholder="rating from 1 to 10"
            />
          </div>
        </div>
        <div>
          <label>How are you feeling about the future?</label>
          <div>
            <Field
              name="feelingforfuture"
              component="input"
              type="number"
              placeholder="rating from 1 to 10"
            />
          </div>
        </div>
        <div>
          <label>How is your personal life?</label>
          <div>
            <Field
              name="personalife"
              component="input"
              type="number"
              placeholder="rating from 1 to 10"
            />
          </div>
        </div>
        <div>
          <label>Are you finding it difficult to get out of bed?</label>
          <div>
            <Field
              name="feelingoverthelastweek"
              component="input"
              type="number"
              placeholder="rating from 1 to 10"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)