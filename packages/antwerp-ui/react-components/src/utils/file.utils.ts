const MB = 1048576;

export function hasValidFormat(file: File, acceptedFormat?: string): boolean {
  return (
    !acceptedFormat ||
    acceptedFormat === '*' ||
    acceptedFormat === file.type ||
    (acceptedFormat?.includes('*') &&
      !!acceptedFormat?.split('/')?.[0] &&
      file.type.startsWith(acceptedFormat?.split('/')?.[0]))
  );
}

export function hasValidSize(file: File, maxSize?: number): boolean {
  return !maxSize || file.size <= maxSize * MB;
}

export function areFilesValid(
  files: File[],
  acceptedFormat?: string,
  maxSize?: number
): { validSize: boolean; validFormat: boolean }[] {
  return files.map((f) => ({ validFormat: hasValidFormat(f, acceptedFormat), validSize: hasValidSize(f, maxSize) }));
}
