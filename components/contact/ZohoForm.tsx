import { useState } from 'react';

export default function ZohoForm() {
  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    Email: '',
    PhoneNumber_countrycode: '',
    PhoneNumber_first: '',
    PhoneNumber_second: '',
    Dropdown: '',
    MultiLine: '',
    DecisionBox: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePhoneInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextFieldId?: string
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.length === e.target.maxLength && nextFieldId) {
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        (nextField as HTMLInputElement).focus();
      }
    }
  };

  const validatePhoneNumber = () => {
    const { PhoneNumber_countrycode, PhoneNumber_first, PhoneNumber_second } = formData;
    const isValid = [PhoneNumber_countrycode, PhoneNumber_first, PhoneNumber_second].every(
      (part) => /^\d+$/.test(part) && part.length > 0
    );
    if (!isValid) {
      alert('Please enter a valid phone number using only digits.');
    }
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber()) return;

    const fullPhoneNumber =
      formData.PhoneNumber_countrycode + formData.PhoneNumber_first + formData.PhoneNumber_second;

    const hiddenPhoneInput = document.createElement('input');
    hiddenPhoneInput.setAttribute('type', 'hidden');
    hiddenPhoneInput.setAttribute('name', 'PhoneNumber');
    hiddenPhoneInput.setAttribute('value', fullPhoneNumber);

    const formElement = document.getElementById('zohoForm') as HTMLFormElement;
    formElement.appendChild(hiddenPhoneInput);

    setIsSubmitting(true);

    formElement.submit();

    setTimeout(() => {
      alert('Form successfully submitted! Thank you.');
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="py-16 bg-surface-dark">
      <iframe id="submissionFrame" name="submissionFrame" style={{ display: 'none' }}></iframe>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Fill out the form below, and we will get back to you as soon as possible.
          </h2>
          <form
            id="zohoForm"
            action="https://forms.zohopublic.com/clientric/form/ContactUs/formperma/QaMgmFq0ML8erljFkF-tLHz-jM0EmYJ-KOF-ZcEGVBA/htmlRecords/submit"
            method="POST"
            encType="multipart/form-data"
            target="submissionFrame"
            onSubmit={handleSubmit}
            className="bg-surface p-8 rounded-lg shadow-md space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="Name_First" className="block text-gray-300 mb-2">
                  First Name <span className="text-accent-gold" aria-hidden="true">*</span>
                  <span className="sr-only">(Required)</span>
                </label>
                <input
                  type="text"
                  id="Name_First"
                  name="Name_First"
                  aria-required="true"
                  value={formData.Name_First}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="Name_Last" className="block text-gray-300 mb-2">
                  Last Name <span className="text-accent-gold">*</span>
                </label>
                <input
                  type="text"
                  id="Name_Last"
                  name="Name_Last"
                  value={formData.Name_Last}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                  className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Email" className="block text-gray-300 mb-2">
                Email <span className="text-accent-gold" aria-hidden="true">*</span>
                <span className="sr-only">(Required)</span>
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                aria-required="true"
                value={formData.Email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="PhoneNumber_countrycode" className="block text-gray-300 mb-2">
                Phone <span className="text-accent-gold">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  id="PhoneNumber_countrycode"
                  name="PhoneNumber_countrycode"
                  value={formData.PhoneNumber_countrycode}
                  onChange={(e) => handlePhoneInput(e, 'PhoneNumber_first')}
                  placeholder="###"
                  maxLength={3}
                  required
                  className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"
                />
                <input
                  type="text"
                  id="PhoneNumber_first"
                  name="PhoneNumber_first"
                  value={formData.PhoneNumber_first}
                  onChange={(e) => handlePhoneInput(e, 'PhoneNumber_second')}
                  placeholder="###"
                  maxLength={3}
                  required
                  className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"
                />
                <input
                  type="text"
                  id="PhoneNumber_second"
                  name="PhoneNumber_second"
                  value={formData.PhoneNumber_second}
                  onChange={handlePhoneInput}
                  placeholder="####"
                  maxLength={4}
                  required
                  className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Dropdown" className="block text-gray-300 mb-2">
                I need help with... <span className="text-accent-gold">*</span>
              </label>
              <select
                id="Dropdown"
                name="Dropdown"
                value={formData.Dropdown}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              >
                <option value="">-Select-</option>
                <option value="Systems that make my team more efficient">Systems that make my team more efficient</option>
                <option value="Making reports and dashboards easy to access">Making reports and dashboards easy to access</option>
                <option value="Cutting down on software costs">Cutting down on software costs</option>
                <option value="Automating tasks to save time">Automating tasks to save time</option>
                <option value="Organizing our processes and SOPs">Organizing our processes and SOPs</option>
                <option value="Customizing tech solutions for my business">Customizing tech solutions for my business</option>
              </select>
            </div>

            <div>
              <label htmlFor="MultiLine" className="block text-gray-300 mb-2">
                Tell me about your project
              </label>
              <textarea
                id="MultiLine"
                name="MultiLine"
                value={formData.MultiLine}
                onChange={handleInputChange}
                placeholder="Please share any specific challenges or goals you'd like to discuss..."
                rows={4}
                className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="DecisionBox"
                  name="DecisionBox"
                  checked={formData.DecisionBox}
                  onChange={handleInputChange}
                  className="form-checkbox text-accent-gold rounded border-gray-700 bg-surface-dark focus:ring-accent-gold"
                />
                <span className="ml-2 text-gray-300">SMS & Email Opt-in</span>
              </label>
              <p className="text-sm text-gray-400 mt-2">
                Opt-in to receive SMS notifications, alerts, and occasional marketing communications. You are opted in by default to ensure you receive timely updates from our team.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}