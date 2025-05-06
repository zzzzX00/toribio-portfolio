import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
    // State for modal/lightbox
    const [selectedCert, setSelectedCert] = useState(null);
    
    // Generate certificates data from cert (1).jpg to cert (10).jpg
    const certificates = Array.from({ length: 10 }, (_, i) => {
        const certNumber = i + 1;
        return {
            id: certNumber,
            title: `Certificate ${certNumber}`,
            issuer: "Krishna Kumar | SimpliLearn",
            date: `2025`,
            image: `/cert (${certNumber}).jpg`,
        };
    });

    // Function to open the certificate modal
    const openCertificate = (cert) => {
        setSelectedCert(cert);
    };

    // Function to close the certificate modal
    const closeCertificate = () => {
        setSelectedCert(null);
    };

    return (
        <div className="certificates-container">
            <h1>My Certificates</h1>
            <p className="certificates-intro">
                Here are some of the professional certifications I've earned throughout my career.
                Click on any certificate to view the credential.
            </p>
            
            <div className="certificates-grid">
                {certificates.map(cert => (
                    <div className="certificate-card" key={cert.id}>
                        <div className="certificate-image">
                            <img 
                                src={cert.image} 
                                alt={`Certificate ${cert.id}`} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/placeholder-certificate.jpg'; // Fallback image
                                }}
                            />
                        </div>
                        <div className="certificate-details">
                            <h3>{cert.title}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                            <p className="certificate-date">Issued: {cert.date}</p>
                            <button 
                                onClick={() => openCertificate(cert)}
                                className="certificate-link"
                            >
                                View Certificate
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certificate Modal/Lightbox */}
            {selectedCert && (
                <div className="certificate-modal-overlay" onClick={closeCertificate}>
                    <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeCertificate}>×</button>
                        <h2>{selectedCert.title}</h2>
                        <div className="modal-certificate-image">
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.title} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/placeholder-certificate.jpg';
                                }}
                            />
                        </div>
                        <div className="modal-certificate-details">
                            <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
                            <p><strong>Issued:</strong> {selectedCert.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;