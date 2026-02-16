import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />

                  <div className="p-6 space-y-6">
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </Dialog.Title>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{project.details.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{project.details.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.details.beforeImage && project.details.afterImage && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Before & After</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <img
                                src={project.details.beforeImage}
                                alt="Before"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <p className="text-center text-sm text-gray-500 mt-2">Before</p>
                            </div>
                            <div>
                              <img
                                src={project.details.afterImage}
                                alt="After"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <p className="text-center text-sm text-gray-500 mt-2">After</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Design Style</h4>
                          <p className="text-gray-600">{project.details.style}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900">Materials Used</h4>
                          <ul className="mt-2 space-y-1">
                            {project.details.materials.map((material, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                                {material}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;