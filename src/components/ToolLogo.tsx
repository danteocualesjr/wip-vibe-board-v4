
import React from 'react';

interface ToolLogoProps {
  name: string;
  category: string;
}

const ToolLogo: React.FC<ToolLogoProps> = ({ name, category }) => {
  const getLogoUrl = (toolName: string) => {
    const logoMap: { [key: string]: string } = {
      'Cursor': 'https://cursor.sh/brand/icon.png',
      'Windsurf': 'https://codeium.com/favicon.ico',
      'Claude Code': 'https://claude.ai/images/claude_app_icon.png',
      'Codex': 'https://openai.com/favicon.ico',
      'Devin': 'https://devin.ai/favicon.ico',
      'Bolt': 'https://bolt.new/icons/bolt.svg',
      'Lovable': 'https://lovable.dev/favicon.ico',
      'Replit': 'https://replit.com/public/images/logo-small.png',
      'v0': 'https://v0.dev/icon.png',
      'Manus': 'https://manus.ai/favicon.ico',
      'Gamma': 'https://gamma.app/favicon.ico',
      'Zapier': 'https://zapier.com/favicon.ico',
      'Lindy': 'https://lindy.ai/favicon.ico',
      'Others': ''
    };
    
    return logoMap[toolName] || '';
  };

  const logoUrl = getLogoUrl(name);

  return (
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200 shadow-sm">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={`${name} logo`} 
          className="w-8 h-8 object-contain"
          onError={(e) => {
            // Fallback to a colored background with first letter if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
      ) : null}
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm hidden">
        {name.charAt(0)}
      </div>
    </div>
  );
};

export default ToolLogo;
