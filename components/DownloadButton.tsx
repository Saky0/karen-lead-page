'use client'

import React from 'react';

export const DownloadButton: React.FC = () => {
    const downloadFile = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'LIBIDO SEM PAUSA.pdf'); // Nome do arquivo no download
        document.body.appendChild(link);
        link.click();
        link.remove();
      };

    return (
        <button  
            onClick={() => downloadFile('/files/LIBIDO SEM PAUSA.pdf')}
            className={`btn px-5 min-[420px]:px-8 py-4 text-base min-[420px]:text-lg font-extrabold rounded-md uppercase tracking-wider`}
            type="submit">
            Baixar agora
        </button>
    );
}