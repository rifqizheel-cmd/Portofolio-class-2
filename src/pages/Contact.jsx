import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaTrash, FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Contact.css';

const getInitialMessages = () => {
  try {
    const saved = localStorage.getItem('guestbook_messages');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });
  const [messages, setMessages] = useState(getInitialMessages);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('guestbook_messages', JSON.stringify(messages));
  }, [messages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nama || !formData.email || !formData.pesan) {
      setSubmitStatus('error');
      return;
    }

    const newMessage = {
      id: Date.now(),
      ...formData,
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setMessages([...messages, newMessage]);
    setFormData({ nama: '', email: '', pesan: '' });
    setSubmitStatus('success');
    
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const socialLinks = {
    whatsapp: 'https://wa.me/6289510035162',
    instagram: 'https://instagram.com/rifqie_alheal',
    github: 'https://github.com/rifqizheel-cmd',
    email: 'mailto:rifqizheel@gmail.com'
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h1 className="section-title">Hubungi Saya</h1>
          <p className="section-subtitle">Silakan hubungi saya melalui form di bawah atau via social media</p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Kirim Pesan</h3>
              
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pesan">Pesan</label>
                <div className="input-wrapper textarea-wrapper">
                  <FaPaperPlane className="input-icon" />
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows="5"
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">Pesan berhasil dikirim!</div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-error">Mohon isi semua field!</div>
              )}

              <button type="submit" className="btn-submit">Kirim Pesan</button>
            </form>

            <div className="guestbook-section">
              <h3 className="guestbook-title">Buku Tamu</h3>
              {messages.length === 0 ? (
                <p className="guestbook-empty">Belum ada pesan. Jadilah yang pertama!</p>
              ) : (
                <div className="guestbook-list">
                  {messages.map((msg) => (
                    <div key={msg.id} className="guestbook-card">
                      <div className="guestbook-header">
                        <div className="guestbook-user">
                          <span className="guestbook-name">{msg.nama}</span>
                          <span className="guestbook-email">{msg.email}</span>
                        </div>
                        <button 
                          className="btn-delete"
                          onClick={() => handleDelete(msg.id)}
                          title="Hapus pesan"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <p className="guestbook-message">{msg.pesan}</p>
                      <span className="guestbook-date">{msg.tanggal}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="social-card">
              <h3 className="social-title">Hubungi Saya</h3>
              
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <FaWhatsapp className="social-icon" />
                <span>WhatsApp</span>
              </a>
              
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
              
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
              
              <a href={socialLinks.email} className="social-link email">
                <SiGmail className="social-icon" />
                <span>Email</span>
              </a>
            </div>

            <div className="contact-info-card">
              <h3 className="info-title">Informasi Kontak</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaWhatsapp className="info-icon" />
                  <span>089510035162</span>
                </div>
                <div className="info-item">
                  <FaInstagram className="info-icon" />
                  <span>@rifqie_alheal</span>
                </div>
                <div className="info-item">
                  <FaGithub className="info-icon" />
                  <span>rifqizheel-cmd</span>
                </div>
                <div className="info-item">
                  <SiGmail className="info-icon" />
                  <span>rifqizheel@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
