import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Quill from 'quill';

// import Toolbar from 'quill/modules/toolbar';
// import Snow from 'quill/themes/snow';

// import Bold from 'quill/formats/bold';
// import Italic from 'quill/formats/italic';
// import Header from 'quill/formats/header';

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ script: 'sub' }, { script: 'super' }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'script',
  ];

  return (
    <div className='flex flex-col gap-8'>
      <form className='flex flex-col gap-8'>
        <div className='grid grid-cols-2 gap-x-16 gap-y-6 w-full'>
          <div className='col-span-2'>
            <label
              htmlFor='Title'
              className='block text-sm font-medium text-gray-700'
            >
              Title
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='Title'
                id='Title'
                className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                placeholder='you@example.com'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <label
              htmlFor='subtitle'
              className='block text-sm font-medium text-gray-700'
            >
              Subtitle
            </label>
            <div className='mt-1'>
              <textarea
                rows={3}
                name='subtitle'
                id='subtitle'
                className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                placeholder='you@example.com'
              />
            </div>
          </div>
        </div>
        <div>
          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </div>
      </form>
      <button className='bg-graY-300 py-2 px-4'>Render</button>
      <div>{value}</div>
    </div>
  );
};

export default RichTextEditor;
