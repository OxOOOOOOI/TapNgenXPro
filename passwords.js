// Password management system for TapNgen
// This file handles saving and retrieving passwords using browser localStorage

// Advanced encryption system
const CryptoJS = {
    // Custom encryption key (obfuscated)
    _key: (function() {
        const _0x4f23 = ['41','7a','65','72','74','79','75','69','6f','70','53','65','63','72','65','74','4b','65','79','32','30','32','35','40','40','21','23','24','25','26'];
        let _0x2a7d = '';
        for(let i = 0; i < _0x4f23.length; i++) {
            _0x2a7d += String.fromCharCode(parseInt(_0x4f23[i], 16));
        }
        return _0x2a7d;
    })(),
    
    // Advanced encryption function
    encrypt: function(data) {
        try {
            // First layer: XOR encryption
            let result = '';
            for(let i = 0; i < data.length; i++) {
                result += String.fromCharCode(data.charCodeAt(i) ^ this._key.charCodeAt(i % this._key.length));
            }
            
            // Second layer: Base64 encoding
            result = btoa(result);
            
            // Third layer: Custom character substitution
            const substitution = {
                'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V',
                'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q',
                'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L',
                'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G',
                'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B',
                'Z': 'A', 'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w',
                'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r',
                'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm',
                'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h',
                't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c',
                'y': 'b', 'z': 'a', '0': '9', '1': '8', '2': '7',
                '3': '6', '4': '5', '5': '4', '6': '3', '7': '2',
                '8': '1', '9': '0', '+': '-', '/': '_', '=': '.'
            };
            
            result = result.split('').map(char => substitution[char] || char).join('');
            
            // Fourth layer: Add random salt
            const salt = Math.random().toString(36).substring(2, 15);
            result = salt + result;
            
            return result;
        } catch (error) {
            console.error('Encryption error:', error);
            return null;
        }
    },
    
    // Advanced decryption function
    decrypt: function(encryptedData) {
        try {
            // Remove salt
            const data = encryptedData.substring(10);
            
            // Reverse character substitution
            const reverseSubstitution = {
                'Z': 'A', 'Y': 'B', 'X': 'C', 'W': 'D', 'V': 'E',
                'U': 'F', 'T': 'G', 'S': 'H', 'R': 'I', 'Q': 'J',
                'P': 'K', 'O': 'L', 'N': 'M', 'M': 'N', 'L': 'O',
                'K': 'P', 'J': 'Q', 'I': 'R', 'H': 'S', 'G': 'T',
                'F': 'U', 'E': 'V', 'D': 'W', 'C': 'X', 'B': 'Y',
                'A': 'Z', 'z': 'a', 'y': 'b', 'x': 'c', 'w': 'd',
                'v': 'e', 'u': 'f', 't': 'g', 's': 'h', 'r': 'i',
                'q': 'j', 'p': 'k', 'o': 'l', 'n': 'm', 'm': 'n',
                'l': 'o', 'k': 'p', 'j': 'q', 'i': 'r', 'h': 's',
                'g': 't', 'f': 'u', 'e': 'v', 'd': 'w', 'c': 'x',
                'b': 'y', 'a': 'z', '9': '0', '8': '1', '7': '2',
                '6': '3', '5': '4', '4': '5', '3': '6', '2': '7',
                '1': '8', '0': '9', '-': '+', '_': '/', '.': '='
            };
            
            let result = data.split('').map(char => reverseSubstitution[char] || char).join('');
            
            // Decode Base64
            result = atob(result);
            
            // Decrypt XOR
            let decrypted = '';
            for(let i = 0; i < result.length; i++) {
                decrypted += String.fromCharCode(result.charCodeAt(i) ^ this._key.charCodeAt(i % this._key.length));
            }
            
            return decrypted;
        } catch (error) {
            console.error('Decryption error:', error);
            return null;
        }
    }
};

// Storage key (obfuscated)
const storageKey = (function() {
    const _0x1e4f = ['74','61','70','6e','67','65','6e','5f','70','61','73','73','77','6f','72','64','73'];
    let _0x3a2d = '';
    for(let i = 0; i < _0x1e4f.length; i++) {
        _0x3a2d += String.fromCharCode(parseInt(_0x1e4f[i], 16));
    }
    return _0x3a2d;
})();

// Default passwords (obfuscated)
const DEFAULT_PASSWORDS = {
    admin: (function() {
        const _0x7c3e = ['41','7a','65','72','74','79','75','69','6f','70','5e','5e','41','64','6d','69','6e','40','40','32','30','32','35'];
        let _0x3a8b = '';
        for(let i = 0; i < _0x7c3e.length; i++) {
            _0x3a8b += String.fromCharCode(parseInt(_0x7c3e[i], 16));
        }
        return _0x3a8b;
    })(),
    user: (function() {
        const _0x5a71 = ['41','7a','65','72','74','79','75','69','6f','70','5e','5e','40','40','32','30','32','35'];
        let _0x4e08 = '';
        for(let i = 0; i < _0x5a71.length; i++) {
            _0x4e08 += String.fromCharCode(parseInt(_0x5a71[i], 16));
        }
        return _0x4e08;
    })()
};

// Function to save passwords to localStorage
function savePasswords(passwords) {
    try {
        // Validate passwords array
        if (!Array.isArray(passwords)) {
            throw new Error('Passwords must be an array');
        }
        
        // Encrypt the passwords
        const encryptedData = CryptoJS.encrypt(JSON.stringify(passwords));
        if (!encryptedData) {
            throw new Error('Encryption failed');
        }
        
        localStorage.setItem(storageKey, encryptedData);
        return { success: true, message: 'Passwords saved successfully' };
    } catch (error) {
        console.error('Error saving passwords:', error);
        return { success: false, message: error.message };
    }
}

// Function to get all passwords from localStorage
function getPasswords() {
    try {
        const encryptedData = localStorage.getItem(storageKey);
        if (!encryptedData) {
            return [];
        }
        
        const decryptedData = CryptoJS.decrypt(encryptedData);
        if (!decryptedData) {
            throw new Error('Decryption failed');
        }
        
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error('Error retrieving passwords:', error);
        return [];
    }
}

// Function to delete all passwords
function deletePasswords() {
    try {
        localStorage.removeItem(storageKey);
        return { success: true, message: 'Passwords deleted successfully' };
    } catch (error) {
        console.error('Error deleting passwords:', error);
        return { success: false, message: error.message };
    }
}

// Function to add a new password
function addPassword(password) {
    try {
        if (!password || typeof password !== 'string' || password.trim() === '') {
            throw new Error('Invalid password format');
        }
        
        const passwords = getPasswords();
        if (!passwords.includes(password)) {
            passwords.push(password);
            return savePasswords(passwords);
        }
        
        return { success: true, message: 'Password already exists' };
    } catch (error) {
        console.error('Error adding password:', error);
        return { success: false, message: error.message };
    }
}

// Function to check if a password is valid
function checkPassword(password, isAdminCheck = false) {
    try {
        // Check default passwords first
        if (isAdminCheck) {
            // Vérification spécifique pour l'admin
            if (password === DEFAULT_PASSWORDS.admin) {
                return { success: true, message: 'Admin password valid' };
            }
        } else {
            // Vérification pour les utilisateurs normaux
            if (password === DEFAULT_PASSWORDS.user) {
                return { success: true, message: 'Default user password valid' };
            }
        }
        
        // Then check generated passwords (only for non-admin checks)
        if (!isAdminCheck) {
            const passwords = getPasswords();
            if (passwords && passwords.includes(password)) {
                return { success: true, message: 'Generated password valid' };
            }
        }
        
        return { success: false, message: 'Invalid password' };
    } catch (error) {
        console.error('Error checking password:', error);
        return { success: false, message: error.message };
    }
}

// Function to export passwords as a file
function exportPasswords() {
    try {
        const passwords = getPasswords();
        const encryptedData = CryptoJS.encrypt(JSON.stringify(passwords));
        if (!encryptedData) {
            throw new Error('Encryption failed');
        }
        
        const blob = new Blob([encryptedData], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tapngen_passwords.enc';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return { success: true, message: 'Passwords exported successfully' };
    } catch (error) {
        console.error('Error exporting passwords:', error);
        return { success: false, message: error.message };
    }
}

// Function to import passwords from a file
function importPasswords(fileContent) {
    try {
        const decryptedData = CryptoJS.decrypt(fileContent);
        if (!decryptedData) {
            throw new Error('Decryption failed');
        }
        
        const passwords = JSON.parse(decryptedData);
        if (!Array.isArray(passwords)) {
            throw new Error('Invalid password file format');
        }
        
        const result = savePasswords(passwords);
        return result;
    } catch (error) {
        console.error('Error importing passwords:', error);
        return { success: false, message: error.message };
    }
}

// Function to completely reset the system
function resetSystem() {
    try {
        // Clear all passwords
        localStorage.removeItem(storageKey);
        
        // Clear any other related data
        localStorage.removeItem('adminAuthorized');
        localStorage.removeItem('adminLoginAttempts');
        
        return { success: true, message: 'System reset successfully' };
    } catch (error) {
        console.error('Error resetting system:', error);
        return { success: false, message: error.message };
    }
}

// Export functions for use in other files
window.passwordManager = {
    savePasswords,
    getPasswords,
    deletePasswords,
    addPassword,
    checkPassword,
    exportPasswords,
    importPasswords,
    resetSystem
}; 