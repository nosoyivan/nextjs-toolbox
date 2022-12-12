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

        <label htmlFor="services">How can we help?</label>
        <textarea id="services" className={styles['form-field']} wrap="soft" name="services" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
