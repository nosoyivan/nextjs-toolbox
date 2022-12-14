import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="phone">phone</label>
        <input id="phone" className={styles['form-field']} type="tel" name="phone" required />

        <label htmlFor="email">Email</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <label htmlFor="reachout">Best Way to conact</label>
        <select id="reachout" className={styles['form-field']} type="text" name="Reachout" required >
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
        </select>

        <label htmlFor="services">Service needs</label>
        <select id="services" className={styles['form-field']} type="text" name="services" required >
          <option value="Gas">Gas</option>
          <option value="Electric">Electric</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="servicesinfo">How can we help?</label>
        <textarea id="servicesinfo" className={styles['form-field']} wrap="soft" name="servicesinfo" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
