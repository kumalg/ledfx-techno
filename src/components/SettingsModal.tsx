import { useState, useEffect } from "react";
import { useProjectStore } from "../timeline/store";
import { api } from "../ledfx/api";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const settings = useProjectStore((state) => state.settings);
  const setLedfxUrl = useProjectStore((state) => state.setLedfxUrl);
  
  const [url, setUrl] = useState(settings.ledfxUrl);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setUrl(settings.ledfxUrl);
  }, [settings.ledfxUrl]);

  const handleSave = () => {
    setLedfxUrl(url);
    api.setHost(url);
    onClose();
  };

  const handleTest = async () => {
    setTestStatus('testing');
    setErrorMessage('');
    
    try {
      const testUrl = url.endsWith('/') ? url.slice(0, -1) : url;
      const response = await fetch(`${testUrl}/api/info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setTestStatus('success');
        setTimeout(() => setTestStatus('idle'), 3000);
      } else {
        setTestStatus('error');
        setErrorMessage(`Connection failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      setTestStatus('error');
      setErrorMessage(`Cannot connect to LedFX: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card border border-border rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Settings</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              LedFX Instance URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="http://192.168.0.175:8888"
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Enter the URL of your LedFX server (e.g., http://192.168.0.175:8888)
            </p>
          </div>
          
          <button
            onClick={handleTest}
            disabled={testStatus === 'testing'}
            className="w-full px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors disabled:opacity-50"
          >
            {testStatus === 'testing' ? 'Testing...' : 'Test Connection'}
          </button>
          
          {testStatus === 'success' && (
            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
              Connection successful!
            </div>
          )}
          
          {testStatus === 'error' && (
            <div className="p-3 bg-destructive/20 border border-destructive/50 rounded-lg text-destructive text-sm">
              {errorMessage}
            </div>
          )}
        </div>
        
        <div className="p-6 border-t border-border flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
